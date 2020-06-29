export class DataService {
   constructor() {
      this.url = "https://api.jsonbin.io/b/5ef5f12097cb753b4d183c70";

   }
   updateData = async (newData) => {
      await fetch(this.url, 
         {
           method: 'PUT',
           headers: {
             'Content-Type': 'application/json;charset=utf-8',
           },
           body: JSON.stringify(newData)
         }
      );
   }

   getData = async () => {
      const response = await fetch(`${this.url}/latest`);
      
      if(!response.ok) {
         return new Error(response.status);
      }

      return await response.json();
   }
}
