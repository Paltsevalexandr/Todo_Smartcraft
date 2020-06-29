import React from 'react';

export const ErrorBoundary = ({status}) => {

   return (
      <div>
         <span>
            You get an error {status}
         </span>
      </div>
   )
}
