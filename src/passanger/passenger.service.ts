import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PASSENGER } from '../common/models/models';

import * as bcrypt from 'bcrypt';
import { PassengerDTO } from './dto/passenger.dto';
import { IPassenger } from 'src/common/interfaces/passenger.interface';


@Injectable()
export class PassengerService {
  constructor(
    @InjectModel(PASSENGER.name)
    private readonly pasajeroModelo: Model<IPassenger>,
  ) {}
  async insertar(pasajeroDTO: PassengerDTO): Promise<IPassenger> {
    const nuevoPasajero = new this.pasajeroModelo(pasajeroDTO);
    return await nuevoPasajero.save();
  }

  async todos():Promise<IPassenger[]>{
    return await this.pasajeroModelo.find();
  }

  async uno(id:string):Promise<IPassenger>{
    return await this.pasajeroModelo.findById(id);
  }

  async actualizar(id:string, pasajeroDTO: PassengerDTO):Promise<IPassenger>{
    return await this.pasajeroModelo.findByIdAndUpdate(id, pasajeroDTO,{new:true});
  }

  async eliminar(id:string){
    await this.pasajeroModelo.findByIdAndDelete(id);
    return {status:HttpStatus.OK, msg:"Eliminado"};
  }
}
