

const quotes = [
    {
        quote : "If you tell the truth, you don't have to remember anything",
        author : "Mark Twain"
    },
    {
        quote : "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals",
        author : "J.K. Rowling"
    },
    {
        quote : "So many books, so little time",
        author : "Frank Zappa"
    },
    {
        quote : "A room without books is like a body without a soul",
        author : "Marcus Tullius Cicero"
    },
    {
        quote : "You only live once, but if you do it right, once is enough.",
        author : "Mae West"
    },
    {
        quote : "Be the change that you wish to see in the world.",
        author : "Mahatma Gandhi"
    },
    {
        quote : "In three words I can sum up everything I've learned about life: it goes on",
        author : "Robert Frost"
    },
    {
        quote : "If you tell the truth, you don't have to remember anything.",
        author : "Mark Twain"
    },
    {
        quote : "Be yourself; everyone else is already taken",
        author : "Oscar Wilde"
    },
    {
        quote : "A friend is someone who knows all about you and still loves you.",
        author : "Elbert Hubbard"
    },
    {
        quote : "To live is the rarest thing in the world. Most people exist, that is all.",
        author : "Oscar Wilde"
    },
    {
        quote : "Always forgive your enemies; nothing annoys them so much.",
        author : "Oscar Wilde"
    },
    {
        quote : "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that",
        author : "Martin Luther King Jr"
    },
    {
        quote : "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author : "Mahatma Gandhi"
    },
    {
        quote : "We accept the love we think we deserve",
        author : "Stephen Chbosky"
    },
    {
        quote : "Without music, life would be a mistake.",
        author : "Josh"
    },
    {
        quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
        author : "Albert Einstein"
    },
    {
        quote : "Without music, life would be a mistake.",
        author : "Friedrich Nietzsche"
    }, {
        quote : "I am so clever that sometimes I don't understand a single word of what I am saying",
        author : "Oscar Wilde"
    }, {
        quote : "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author : "Ralph Waldo Emerson"
    }, {
        quote : "Insanity is doing the same thing, over and over again, but expecting different results.",
        author : "Narcotics Anonymous"
    }, {
        quote : "It is better to be hated for what you are than to be loved for what you are not",
        author : "Andre Gide"
    }, {
        quote : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author : "Marilyn Monroe"
    }, 
]
// selecting the ui
const show = document.querySelector('p')
const author = document.querySelector('h1')
const button = document.querySelector('button')

button.addEventListener('click',(e)=>{
    e.preventDefault;
    quoteGenerator()
})
function quoteGenerator(){
    let inside = quotes[Math.floor(Math.random() * quotes.length)].quote
    let pep = quotes[Math.floor(Math.random() *quotes.length)].author
    let full = [inside,pep]
    show.textContent = full[0]
    author.textContent = full[1]
    console.log(full[0],full[1])
    
return
}
quoteGenerator()