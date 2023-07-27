//kebabCase es un formato de conversión para cadenas de texto que transforma
//las palabras en minúsculas y separa las palabras con guiones (también conocidos como guiones medios o "kebabs").
import { slug } from 'github-slugger'

const kebabCase = (str) => slug(str)

export default kebabCase