import {db, cloud} from './cloud-init'
const list = () => {
  return db.collection('goods').get()
}
export default {
  list,listWithCategory
}
const listWithCategory = () => {
  return cloud.callFunction({
    name: 'goods-list-with-category'
  })
}