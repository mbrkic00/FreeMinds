// ===== Modules =====
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// ===== Exports =====
export const ArrowKeyRight = ({onClick}) => {
   return (
      <FontAwesomeIcon
        icon = {faArrowRight}
        onClick = {onClick}
      />
   );
}

export const ArrowKeyLeft = ({onClick}) => {
   return (
      <FontAwesomeIcon
        icon = {faArrowLeft}
        onClick = {onClick}
      />
   );
}
