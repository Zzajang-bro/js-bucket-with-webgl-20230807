window.onload = () => {
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
export default 