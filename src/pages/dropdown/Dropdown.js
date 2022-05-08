import { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.scss';
import { ArrowUpIcon, ArrowDownIcon } from '../../assets/svgs';
import { OPTIONS } from './data/data';

function Dropdown() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [selectedOption, setSelectedOption] = useState('선택된 내용');
  const [optionList, setOptionList] = useState([...OPTIONS]);

  const selectedRef = useRef();
  const searchRef = useRef();
  const outerRef = useRef();

  const handleClickOuter = (e) => {
    if (!outerRef.current.contains(e.target)) setIsDisplayed(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOuter);
    return () => {
      document.removeEventListener('mousedown', handleClickOuter);
    };
  }, []);

  const handleDisplayList = () => {
    setIsDisplayed((prev) => !prev);
  };

  useEffect(() => {
    if (isDisplayed) {
      searchRef.current.focus();
    }
    if (!isDisplayed) {
      searchRef.current.value = '';
    }
  }, [isDisplayed]);

  const handleSelectOption = (e) => {
    const text = e.currentTarget.innerText;
    setSelectedOption(text);
    setIsDisplayed((prev) => !prev);
  };

  useEffect(() => {
    selectedRef.current.innerText = selectedOption;
  }, [selectedOption]);

  const handleSearchOptions = (e) => {
    const text = e.target.value;
    const filteredList = [...OPTIONS].filter((content) => {
      return content.title.toUpperCase().includes(text.toUpperCase());
    });
    setOptionList(filteredList);
  };

  const option = optionList.map((content) => (
    <li role='presentation' key={`options-${content.id}`} className={styles.option} onClick={handleSelectOption}>
      {content.title}
    </li>
  ));

  return (
    <div className={styles.dropdownContainer} ref={outerRef}>
      <div role='presentation' className={styles.selector} onClick={handleDisplayList}>
        <p className={styles.selectedContent} ref={selectedRef}>
          선택된 내용
        </p>
        <span className={styles.iconBox}>{isDisplayed ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
      </div>

      <ul className={styles.list} style={{ display: isDisplayed ? 'block' : 'none' }}>
        <li className={styles.searchBar}>
          <input type='text' placeholder='Search Symbol' ref={searchRef} onChange={handleSearchOptions} />
        </li>
        <li className={styles.options}>
          <ul>{option}</ul>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
