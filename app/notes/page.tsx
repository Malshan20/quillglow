import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AppLayout } from "@/components/dashboard/app-layout"
import { NotesSidebar } from "@/components/notes/notes-sidebar"
import { NoteEditor } from "@/components/notes/note-editor"

export default async function NotesPage({
  searchParams,
}: {
  searchParams: Promise<{ note?: string }>
}) {
  const supabase = await createClient()
  const params = await searchParams

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  // Fetch all notes
  const { data: notes } = await supabase
    .from("notes")
    .select("*")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false })

  const selectedNoteId = params.note
  let selectedNote = null

  if (selectedNoteId) {
    const { data: note } = await supabase.from("notes").select("*").eq("id", selectedNoteId).single()

    selectedNote = note
  }

  return (
    <AppLayout>
      <div className="flex h-[calc(100vh-4rem)] md:h-screen">
        {/* Sidebar */}
        <NotesSidebar notes={notes || []} selectedNoteId={selectedNoteId} />

        {/* Editor */}
        <div className="flex-1 overflow-hidden">
          {selectedNote ? (
            <NoteEditor note={selectedNote} />
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              <p>Select a note or create a new one</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
