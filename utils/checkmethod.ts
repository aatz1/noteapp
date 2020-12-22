function checkmethod(methodget: Boolean, requisition: any, response: any) {
    if(methodget) {
        if (requisition.method === 'GET') {
            return true;
          } else {
            return false;
          }
    } else {
        if (requisition.method === 'POST') {
            return true;
          } else {
            return false;
          }
    }
}

export default checkmethod