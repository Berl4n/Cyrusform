"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [pfData, setPfData] = useState({
    nome: "",
    email: "",
    telefone: "",
    formaContato: "ligacao",
    horario: "manha",
    comentarios: "",
  })

  function formatPhone(value: string) {
    return value.replace(/\D/g, "")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await fetch("https://boxdesk.app.n8n.cloud/webhook/contato/f1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipoContato: "Pessoa Física",
          ...pfData,
          dataEnvio: new Date().toISOString(),
        }),
      })

      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)

      setPfData({
        nome: "",
        email: "",
        telefone: "",
        formaContato: "ligacao",
        horario: "manha",
        comentarios: "",
      })
    } catch (error) {
      console.error("Erro ao enviar cadastro:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <Card className="w-full shadow-lg border-0">
        <CardContent className="flex flex-col items-center justify-center py-16">
          <h3 className="text-xl font-semibold mb-2">Solicitação Enviada!</h3>
          <p className="text-muted-foreground text-center">
            Nossa equipe entrará em contato em breve.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full shadow-lg border-0">
      <CardHeader className="space-y-1 pb-6">
        <CardTitle className="text-2xl font-bold">
          Solicitação de Contato
        </CardTitle>
        <CardDescription>
          Preencha os dados para entrarmos em contato com você
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label>Nome Completo</Label>
            <Input
              value={pfData.nome}
              onChange={(e) => setPfData({ ...pfData, nome: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>E-mail</Label>
            <Input
              type="email"
              value={pfData.email}
              onChange={(e) => setPfData({ ...pfData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Telefone</Label>
            <Input
              value={pfData.telefone}
              onChange={(e) =>
                setPfData({ ...pfData, telefone: formatPhone(e.target.value) })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Comentários</Label>
            <Textarea
              value={pfData.comentarios}
              onChange={(e) =>
                setPfData({ ...pfData, comentarios: e.target.value })
              }
            />
          </div>

         <Button
  type="submit"
  className="w-full bg-[#F5B400] hover:bg-[#D99A00] text-black font-semibold rounded-xl transition"
>
            {isSubmitting ? "Enviando..." : "Enviar Cadastro"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}