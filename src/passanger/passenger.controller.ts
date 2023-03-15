import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PassengerMSG } from 'src/common/constantes';
import { PassengerDTO } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';

@Controller()
export class PassengerController {
    constructor(private readonly pasajeroServicio:PassengerService){
    }
    @MessagePattern(PassengerMSG.INSERTAR)
    insertar(@Payload() pasajeroDTO:PassengerDTO){
        return this.pasajeroServicio.insertar(pasajeroDTO);
    }
    @MessagePattern(PassengerMSG.TODOS)
    todos()
    {
        return this.pasajeroServicio.todos();
    }
    @MessagePattern(PassengerMSG.UNO)
    uno(@Payload() id:string){
        return this.pasajeroServicio.uno(id);
    }
    @MessagePattern(PassengerMSG.ACTUALIZAR)
    actualizar(@Payload() paylod:any){
        return this.pasajeroServicio.actualizar(paylod.id, paylod.pasajeroDTO);
    }
   @MessagePattern(PassengerMSG.ELIMINAR)
    eliminar(@Payload() id:string){
        return this.pasajeroServicio.eliminar(id);
    }
}
