// src/types/Reserva.ts

export interface Reserva {
    id: number;
    clienteId: number;
    habitacionIds: number[];
    fechaInicio: string;
    fechaFin: string;
  }