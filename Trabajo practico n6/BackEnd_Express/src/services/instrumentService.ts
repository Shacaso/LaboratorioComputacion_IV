import connect from '../database/instrument_db'
// import { Instrument } from '../types'

const instruments = connect()


export const getAllInstruments= () => instruments.then(e => e)
export const getInstrument= (id:string) => instruments.then(e => e?.find(d => d.id === id))