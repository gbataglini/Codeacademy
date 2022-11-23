const getSleepHours = day => {
    switch (day) {
      case 'monday':
      return 7
      break; 
      case 'tuesday':
      return 8
      break; 
      case 'wednesday':
      return 8
      break;
      case 'thursday':
      return 6
      break;
      case 'friday':
      return 7
      break;
      case 'saturday':
      return 6
      break;
      case 'sunday':
      return 8
      break;
      default: 
      return 'Error!'
    }
    }
    
    const getActualSleepHours = () => {
      return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
    }
    
    const getIdealSleepHours = () => { 
      const idealHours = 8;
      return idealHours * 7;
    }
    
    const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
      
      if (actualSleepHours === idealSleepHours) { 
        return 'Wow! So well rested! You got' + (idealSleepHours) + 'this week.'
      } else if (actualSleepHours > idealSleepHours) {
        return 'Sheeesh, you overslept! You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week. Did you really need that nap?'
      } else if (actualSleepHours < idealSleepHours) {
        return 'Awk, ye go get some rest pet! You got ' 
        + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than what you needed this week.'
      }
    }
    
    console.log(calculateSleepDebt());