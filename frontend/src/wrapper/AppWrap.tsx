import { SocialMediaButtons, NavigationDots } from "../components"
import { SectionContextProvider } from "../context/SectionContextProvider";

const AppWrap = (props : any) => {
  
  return (
    <main className='bg-primary font-mono'>
      <SectionContextProvider>
        {props.children}
        <SocialMediaButtons />
        <NavigationDots />
      </SectionContextProvider>
    </main>
  )
}

export default AppWrap;