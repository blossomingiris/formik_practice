import './App.css'
import { Private } from './auth/Private'
import { Profile } from './auth/Profile'
import { Button } from './components/Button'
import Container from './components/Container'
import { Box } from './components/context/Box'
import { User } from './components/context/User'
import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
import { CustomButton } from './components/html/Button'
import { Input } from './components/Input'
import { Oscar } from './components/Oscar'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Toast } from './components/templeteliterals/Toast'
import { List } from './generics/List'
import { RandomNumber } from './restriction/RandomNumber'
import { Text } from './components/polymorphic/Text'

function App() {
  const Character = {
    firstName: 'Din',
    lastName: 'Djarin',
    planet: 'Aq Vetinan',
  }

  const nameList = [
    {
      firstName: 'Din',
      lastName: 'Djarin',
      planet: 'Aq Vetinan',
    },
    {
      firstName: 'Grogu',
      lastName: 'unknown',
      planet: 'unknown',
    },
    {
      firstName: 'Bo-Katan',
      lastName: 'Kryze',
      planet: 'Mandalor',
    },
  ]

  return (
    <div className='App'>
      <Greet name='Xenia' messageCount={20} isLoggedIn={false} />
      <Person character={Character} />
      <PersonList characters={nameList} />
      <Status status='loading' />
      <Oscar>
        <Heading>Placeholder text</Heading>
      </Oscar>
      <Greet name='Miltos' messageCount={20} isLoggedIn={true} />
      <Button
        handleClick={(event, id) => console.log('Button clicked', event, id)}
      />
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1px solid magenta', padding: '1rem' }} />
      <Box />
      <User />
      <Private isLoggedIn={true} Component={Profile} />
      <List
        items={[
          { id: 1, name: 'Bo-Katan' },
          { id: 2, name: 'Din' },
          { id: 3, name: 'Grogu' },
        ]}
        handleClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive />
      <Toast position='left-center' />
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Click me
      </CustomButton>
      <Text size='lg' as='h1'>
        heading1
      </Text>
      <Text size='md' as='h2'>
        paragraph
      </Text>
      <Text size='sm' as='label' htmlFor='someId'>
        label
      </Text>
    </div>
  )
}

export default App
