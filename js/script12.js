let weight = document.queryCommandIndeterm('weight')
let height = document.queryCommandIndeterm('height')
let calBMI = document.queryCommandIndeterm('calBMI')
let bmivale = document.queryCommandIndeterm('bmivale')
let bmiresult = document.queryCommandIndeterm('bmiresult')



function calculateBMI(){
    if( weight.valueOf.trim().length==0){
        alert('ป้อนน้ำหนักด้วย')

    }else if( weight.valueOf.trim().length==0){
        alert('ป้อนส่วนสูงด้วย')
}else{
    let bmivaleShow = Nmber(weight.value)
/((Number(height.value)/100)** 2)
bmivale.innerHTML = bmivaleShow.toFixed(2)

//เอาค่า BMI มาแปลผล
if(bmivaleShow<18.50){
    bmiresult.innerHTML ='น้ำน้อย/ผอม'
}else if( bmivaleShow <=22.90){
    bmiresult.innerHTML ='ปกติ (สุขภาพดี)'
}else if( bmivaleShow <=24.99){
    bmiresult.innerHTML = 'ท้วม/โรคอ้วนระดับ 1'
}else if( bmivaleShow <=29.99){
    bmiresult.innerHTML = 'อ้วน/โรคอ้วนระดับ 2'
}else if( bmivaleShow <=29.99){
    bmiresult.innerHTML = 'อ้วนมาก/โรคอ้วนระดับ 3'

calBMI.addEventListener('click',(calculateBMI))

calBMI.addEventListener('mouseover',()=>{
    bmiresult.innerHTML = 'SAU IoT DTI'
})
