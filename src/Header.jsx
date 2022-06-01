import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <div className='settingIcons'>
            <FontAwesomeIcon icon={faBars} />          
              </div>
            <div className='to_to_tist_name'>To-Do</div>
            <div className='settingIcons'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </header>
    )
};

export default Header;