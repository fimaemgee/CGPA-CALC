function addNewRow (){
    const table = document.querySelector("tablebody")

    const tr = document.createElement("tr")
    const td1 = document.createElement("td1")
    const td2 = document.createElement("td2")
    const td3 = document.createElement("td3")

    const input =document.createElement("input")
    const select1 =document.createElement("select")
    const select2 =document.createElement("select")

    const option11 =document.createElement("option")
    const option12 =document.createElement("option")
    const option13 =document.createElement("option")
    const option14 =document.createElement("option")
    const option15 =document.createElement("option")
    const option16 =document.createElement("option")

    const option21 =document.createElement("option")
    const option22 =document.createElement("option")
    const option23 =document.createElement("option")
    const option24 =document.createElement("option")
    const option25 =document.createElement("option")
    const option26 =document.createElement("option")

    option11.innerHTML ="6"
    option12.innerHTML ="5"
    option13.innerHTML ="4"
    option14.innerHTML ="3"
    option15.innerHTML ="2"
    option16.innerHTML ="1"

    option21.innerHTML ="A"
    option22.innerHTML ="B"
    option23.innerHTML ="C"
    option24.innerHTML ="D"
    option25.innerHTML ="E"
    option26.innerHTML ="F"

    input.type ="text"
    input.name ="courseCode"
    input.classList.add("code-input")

    select1.name ="creditunit"
    select2.name ="grade"
    select1.classList.add("select")
    select2.classList.add("select")

    select1.setAttribute("onchange","addUpCreditsGpa()")
    select2.setAttribute("onchange","addUpCreditsGpa()")

    select1.appendChild(option11)
    select1.appendChild(option12)
    select1.appendChild(option13)
    select1.appendChild(option14)
    select1.appendChild(option15)
    select1.appendChild(option16)

    select2.appendChild(option21)
    select2.appendChild(option22)
    select2.appendChild(option23)
    select2.appendChild(option24)
    select2.appendChild(option25)
    select2.appendChild(option26)

    td1.appendChild(input)
    td2.appendChild(select1)
    td3.appendChild(select2)

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    tableBody.appendChild(tr)

}

function addUpCreditsGpa(){

}

    



