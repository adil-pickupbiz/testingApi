export const updateOptation = {
    new: true,
    upsert: true,
    includeResultMetadata: true
  }
  
const today = new Date;
export const  addRecord = {
    isActive : true,
    createDate : today.toLocaleDateString()
}