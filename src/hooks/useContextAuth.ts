import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export function useContextAuth() {
  const value = useContext(AuthContext)

  return value
}