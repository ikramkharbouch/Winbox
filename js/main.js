const golang = document.querySelector('#golang');
const rust = document.querySelector('#rust');
const c = document.querySelector('#c');
const csharp = document.querySelector('#csharp');
const python = document.querySelector('#python');
const java = document.querySelector('#java');
const javascript = document.querySelector('#javascript');
const ruby = document.querySelector('#ruby');


const golangProgram = document.querySelector('#golang-program');
const rustProgram = document.querySelector('#rust-program');
const cProgram = document.querySelector('#c-program');
const csharpProgram = document.querySelector('#csharp-program');
const pythonProgram = document.querySelector('#python-program');
const javaProgram = document.querySelector('#java-program');
const javascriptProgram = document.querySelector('#javascript-program');
const rubyProgram = document.querySelector('#ruby-program');

golang.addEventListener('click', ()=> {
   const golangBox = new WinBox({
       title: 'Golang Program',
       background: '#00aa00',
       width: '400px',
       height: '400px',
       top: 50,
       right: 50,
       bottom: 50,
       left: 50,
       mount: golangProgram,
       onfocus: function() {
           this.setBackground('#00aa00')
       },
       onblur: function() {
        this.setBackground('#777')
    }
   })
})

rust.addEventListener('click', ()=> {
    const rustBox = new WinBox({
        title: 'Rust Program',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 200,
        right: 50,
        bottom: 50,
        left: 150,
        mount: rustProgram,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
         this.setBackground('#777')
     }
    })
 })

 c.addEventListener('click', ()=> {
    const cBox = new WinBox({
        title: 'C Program',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 0,
        right: 50,
        bottom: 50,
        left: 200,
        mount: cProgram,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
         this.setBackground('#777')
     }
    })
 })

 csharp.addEventListener('click', ()=> {
    const csharpBox = new WinBox({
        title: 'C# Program',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 300,
        right: 50,
        bottom: 50,
        left: 300,
        mount: csharpProgram,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
         this.setBackground('#777')
     }
    })
 })


 python.addEventListener('click', ()=> {
    const pythonBox = new WinBox({
        title: 'Python Program',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 400,
        mount: pythonProgram,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
         this.setBackground('#777')
     }
    })
 })

 java.addEventListener('click', ()=> {
    const javaBox = new WinBox({
        title: 'Java Program',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 500,
        mount: javaProgram,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
         this.setBackground('#777')
     }
    })
 })

javascript.addEventListener('click', ()=> {
    const javascriptBox = new WinBox({
        title: 'Javascript Program',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 0,
        right: 50,
        bottom: 50,
        left: 600,
        mount: javascriptProgram,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        }
    })
 })

 ruby.addEventListener('click', ()=> {
    const rubyBox = new WinBox({
        title: 'Ruby Program',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 300,
        right: 50,
        bottom: 50,
        left: 700,
        mount: rubyProgram,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
         this.setBackground('#777')
     }
    })
 })