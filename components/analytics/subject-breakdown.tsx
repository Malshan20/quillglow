"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import type { PomodoroSession, Task } from "@/lib/types/study"

interface SubjectBreakdownProps {
  sessions: PomodoroSession[]
  tasks: Task[]
  flashcards: any[]
}

export function SubjectBreakdown({ sessions, tasks, flashcards }: SubjectBreakdownProps) {
  // Aggregate time by subject from tasks
  const subjectTime: Record<string, number> = {}

  tasks.forEach((task) => {
    const subject = task.subject || "Other"
    const taskSessions = sessions.filter((s) => s.task_id === task.id)
    const minutes = taskSessions.reduce((acc, s) => acc + s.duration_minutes, 0)
    subjectTime[subject] = (subjectTime[subject] || 0) + minutes
  })

  // Add sessions without tasks
  const unlinkedSessions = sessions.filter((s) => !s.task_id)
  if (unlinkedSessions.length > 0) {
    const minutes = unlinkedSessions.reduce((acc, s) => acc + s.duration_minutes, 0)
    subjectTime["General Study"] = (subjectTime["General Study"] || 0) + minutes
  }

  const chartData = Object.entries(subjectTime).map(([subject, minutes]) => ({
    name: subject,
    value: Number((minutes / 60).toFixed(1)),
  }))

  const COLORS = ["hsl(var(--primary))", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#3b82f6"]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
      <Card>
        <CardHeader>
          <CardTitle>Subject Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          {chartData.length === 0 ? (
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              <p>No study data yet</p>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
