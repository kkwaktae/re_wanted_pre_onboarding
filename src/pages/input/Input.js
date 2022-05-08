import { useState, useRef, useEffect } from 'react';
import styles from './Input.module.scss';
import { CheckIcon, EyeViewIcon, EyeSlashIcon } from '../../assets/svgs';

function Input() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isReconfirm, setIsReconfirm] = useState(false);
  const [typePassword, setTypePassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const changeInputStatus = (confirmed, reConfirmed) => {
    setIsConfirmed(confirmed);
    setIsReconfirm(reConfirmed);
  };

  const handleInputEmail = (e) => {
    const email = e.target.value;
    const regEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    const confirmed = regEx.test(email);
    const reconfirmed = confirmed ? false : email.trim().length !== 0;
    changeInputStatus(confirmed, reconfirmed);
  };

  const handleChangeType = () => {
    typePassword ? (passwordRef.current.type = 'password') : (passwordRef.current.type = 'text');
    setTypePassword((prev) => !prev);
    passwordRef.current.focus();
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form className={styles.inputContainer}>
      <label htmlFor='emailLabel'>E-mail</label>
      <div className={styles.emailBox}>
        <input
          id={styles.emailLabel}
          className={styles.email}
          type='email'
          autoComplete='email'
          placeholder='E-mail'
          onChange={handleInputEmail}
          ref={emailRef}
        />
        <CheckIcon className={styles.checkIcon} fill={isConfirmed ? '#4db6ac' : '#aaaaaa'} />
      </div>
      <p className={styles.invalidText} style={{ visibility: isReconfirm ? 'visible' : 'hidden' }}>
        invailed e-mail address
      </p>

      <label htmlFor='passwordLabel'>Password</label>
      <div className={styles.passwordBox}>
        <input
          id={styles.passwordLabel}
          className={styles.password}
          type='password'
          autoComplete='current-password'
          placeholder='Password'
          ref={passwordRef}
        />
        <div
          role='presentation'
          className={styles.safety}
          onClick={handleChangeType}
          style={{ display: !typePassword ? 'none' : 'block' }}
        >
          <EyeSlashIcon width='20' height='20' fill='#aaaaaa' />
        </div>
        <div
          role='presentation'
          className={styles.unSafety}
          onClick={handleChangeType}
          style={{ display: typePassword ? 'none' : 'block' }}
        >
          <EyeViewIcon width='20' height='20' fill='#4db6ac' />
        </div>
      </div>
    </form>
  );
}

export default Input;
