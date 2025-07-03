import { Button } from './components/ui/button'
function App() {

  return (
    <div className='min-h-screen flex flex-col gap-3 bg-black items-center justify-center'>
      <h1 className='text-white text-3xl font-bold'>Shadcn JavaScript Template</h1>
      <h6 className='text-white'>By Paras Kalyan</h6>
      <Button>Click Me</Button>
      <img src='/vite.svg' />
    </div>
  )
}

export default App
