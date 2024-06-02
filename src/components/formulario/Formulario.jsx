import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

function ContactForm () {
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [errors, setErrors] = useState({ email: '', comments: '' })
  const [showSuccess, setShowSuccess] = useState(false)

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let valid = true
    let emailError = ''
    let commentsError = ''

    if (!email) {
      emailError = 'El campo de email es obligatorio.'
      valid = false
    } else if (!validateEmail(email)) {
      emailError = 'Por favor, ingrese un email válido.'
      valid = false
    }

    if (!comments) {
      commentsError = 'El campo de comentarios es obligatorio.'
      valid = false
    }

    setErrors({ email: emailError, comments: commentsError })

    if (valid) {
      setShowSuccess(true)
    }
  }

  return (
    <Form className='mx-5' onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='nameForm.ControlInput1'>
        <Form.Label>Tu correo</Form.Label>
        <Form.Control
          type='email'
          placeholder='tucorreo@correo.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId='comentsForm.ControlTextarea1'>
        <Form.Label>Dejenos sus comentarios</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          isInvalid={!!errors.comments}
        />
        <Form.Control.Feedback type='invalid'>{errors.comments}</Form.Control.Feedback>
      </Form.Group>
      <div className='text-center'>
        <Button variant='danger' type='submit'>
          Enviar
        </Button>
      </div>
      {showSuccess && <Alert variant='success' className='mt-3'>Formulario enviado con éxito!</Alert>}
    </Form>
  )
}

export default ContactForm
