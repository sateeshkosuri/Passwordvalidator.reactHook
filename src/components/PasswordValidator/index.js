import {useState} from 'react'
import {
  BgContainer,
  Card,
  Heading,
  Paragraph,
  UserInput,
  ErrorMassage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMessage] = useState(false)
  const onChangeUserInput = event => {
    setPassword(event.target.value)

    if (password.length >= 8) {
      setErrorMessage(true)
    }
  }
  return (
    <BgContainer>
      <Card>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <UserInput
          type="password"
          onChange={onChangeUserInput}
          value={password}
        />
        {errorMsg ? (
          ' '
        ) : (
          <ErrorMassage>
            Your password must be at least 8 characters
          </ErrorMassage>
        )}
      </Card>
    </BgContainer>
  )
}

export default PasswordValidator
