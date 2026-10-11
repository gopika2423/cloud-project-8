export interface Document {
  id: string
  userId: string
  title: string
  description?: string
  fileName: string
  fileSize: number
  mimeType: string
  uploadedAt: Date
  processedAt?: Date
  status: 'pending' | 'processing' | 'completed' | 'failed'
  concepts: string[]
  tags?: string[]
}

export interface Concept {
  id: string
  name: string
  description?: string
  frequency: number
  documentIds: string[]
  relatedConcepts: string[]
}

export interface Relationship {
  id: string
  source: string
  target: string
  type: string
  strength: number
}

export interface SearchResult {
  documentId: string
  title: string
  relevanceScore: number
  excerpt: string
  concepts: string[]
}

export interface AIResponse {
  answer: string
  sources: SearchResult[]
  confidence: number
}

export interface User {
  id: string
  email: string
  displayName?: string
  avatar?: string
  createdAt: Date
  documentCount: number
}

export interface KnowledgeGap {
  id: string
  userId: string
  topic: string
  relatedConcepts: string[]
  suggestedResources?: string[]
  identifiedAt: Date
}

export interface Quiz {
  id: string
  documentId: string
  questions: Question[]
  createdAt: Date
}

export interface Question {
  id: string
  text: string
  options: string[]
  correctAnswer: number
  explanation?: string
}
