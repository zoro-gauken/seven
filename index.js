let students = ["Davlat", "Feruz", "Asad", "Danya"]

const index = students.indexOf(prompt(students + " кого хочешь кикнуть?").trim())
                
if (index !== 1) {
    alert('готово')
}


console.log(`${index}`)
