import React from 'react';
import { DataService } from '../../services/data-service';

export const WithDataService = Component => {

   return async function(props) {

      const service = new DataService();
      
      return (
         <Component {...props}
         getData = {service.getData} 
         updateData = {service.updateData} />
      )
   }
}
