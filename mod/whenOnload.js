/*
20230807
whenOnload( 함수 )
윈도우 준비되면 실행할 함수 추가하기
*/

const whenOnload = (fn) => {
    window.addEventListener('load', fn)
}

export default whenOnload