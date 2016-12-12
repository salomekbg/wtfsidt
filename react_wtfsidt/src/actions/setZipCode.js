export default function setZipCode(zipcode){
  return function(dispatch){
    dispatch({type: 'SET_ZIP_CODE', zip_code: zipcode})
  }
}
