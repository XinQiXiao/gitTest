/**
 * create test file at test branch
 */

const p1 = new Promise((resolve, reject)=>{
  resolve('hello')
})

const p2 = new Promise((resolve, reject)=>{
  throw new Error('p2 error')
})

async function fun(){
  try{
    let ret = await Promise.all([p1, p2])
    console.log('ret=>', ret)
  }catch(e){
    console.log('e =>', e)
  }
}