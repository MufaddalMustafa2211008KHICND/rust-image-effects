async function init() {
    let rustApp = null

    try {
        rustApp = await import('../pkg')
    } catch (e) {
        console.error(e)
        return
    }

    console.log(rustApp)

    const input = document.getElementById('upload')
    const imgTag = document.getElementById('new-img')

    let fileReader = new FileReader()

    fileReader.onloadend = () => {
        const base64 = fileReader.result.replace(
            /^data:image\/(png|jpeg|jpg);base64,/, ''
        )
        // console.log(fileReader.result)
        imgTag.setAttribute(
            'src',
            fileReader.result
        )
        document.getElementById('btn').addEventListener('click', () => {
            let img_data_url = rustApp.grayscale(base64)
            imgTag.setAttribute(
            'src',
            img_data_url
        )
        })
    }

    input.addEventListener('change', () => {
        console.log('hi')
        fileReader.readAsDataURL(input.files[0])
        console.log('hi')
    })
}

init()