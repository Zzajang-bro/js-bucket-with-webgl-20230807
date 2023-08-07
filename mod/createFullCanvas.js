/*
20230807
createFullCanvas()
항상 전체화면인 캔버스 만들기
캔버스 속성:  id='screen'
*/

const createFullCanvas = () => {
    const c = document.createElement('canvas')
    c.setAttribute( 'id', 'screen' )
    c.style.display = 'block'
    const fitCanvas = () => {
        c.width = document.body.clientWidth
        c.height = document.body.clientHeight
    }   
    fitCanvas()
    window.addEventListener('resize', fitCanvas)
    document.body.append(c)
    // console.log('window init!')  
}
export default createFullCanvas