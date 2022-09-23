export interface PropsGeral {
  id: number
  nome: string
  descricao: string
  preco?: number
  cardapio?: string
  logo: string
  email: string
  site: string
  telefone: string
  endereco: string
  latitude: string
  longitude: string
  face: string
  insta: string
  whats: string
  categoria?: string
  tipo?: "Turismo" | "Restaurante" | "Hotel" | "Bar"
}