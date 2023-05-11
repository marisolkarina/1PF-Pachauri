export interface Inscripcion{
    id: number;
    nombre: string;
    apellido: string;
    cursoInscrito: string;
}

export interface CrearInscripcionPayload {
    nombre: string;
    apellido: string;
    cursoInscrito: string;
}