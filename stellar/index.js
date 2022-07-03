// 버튼이 장식임을 알려주기
const li = document.querySelectorAll('.Xbtn')

for(let i = 0; i in li; i++){
    li[i].addEventListener('click', () => {
        alert('그 버튼은 그저 장식일 뿐이예요!')
    })
}

// enable, disable
const about = document.querySelector("#about")

about.addEventListener('click', (e) => {
    window.scrollBy(0, 200)
})