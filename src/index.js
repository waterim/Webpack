import distConvert from './convert_dist';
import tempConvert from './convert_temp';

document.getElementById("Cels").onkeyup(tempConvert.celsToFahrAndKelvin());
