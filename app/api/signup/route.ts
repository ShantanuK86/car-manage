import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password, name } = signUpSchema.parse(body)

    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })

    // Return the user object excluding password
    const { password: _, ...userWithoutPassword } = user
    return NextResponse.json({ userWithoutPassword })
  } catch (error) {
    return NextResponse.json({ msg: 'Something went wrong: ' + error }, { status: 500 })
  }
}
