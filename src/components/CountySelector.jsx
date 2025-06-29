import React, { useState } from 'react';
import Select from 'react-select';

const countyOptions = [
  { value: 'Baringo', label: 'Baringo' },
  { value: 'Bomet', label: 'Bomet' },
  { value: 'Bungoma', label: 'Bungoma' },
  { value: 'Busia', label: 'Busia' },
  { value: 'Elgeyo-Marakwet', label: 'Elgeyo-Marakwet' },
  { value: 'Embu', label: 'Embu' },
  { value: 'Garissa', label: 'Garissa' },
  { value: 'Homa Bay', label: 'Homa Bay' },
  { value: 'Isiolo', label: 'Isiolo' },
  { value: 'Kajiado', label: 'Kajiado' },
  { value: 'Kakamega', label: 'Kakamega' },
  { value: 'Kericho', label: 'Kericho' },
  { value: 'Kiambu', label: 'Kiambu' },
  { value: 'Kilifi', label: 'Kilifi' },
  { value: 'Kirinyaga', label: 'Kirinyaga' },
  { value: 'Kisii', label: 'Kisii' },
  { value: 'Kisumu', label: 'Kisumu' },
  { value: 'Kitui', label: 'Kitui' },
  { value: 'Kwale', label: 'Kwale' },
  { value: 'Laikipia', label: 'Laikipia' },
  { value: 'Lamu', label: 'Lamu' },
  { value: 'Machakos', label: 'Machakos' },
  { value: 'Makueni', label: 'Makueni' },
  { value: 'Mandera', label: 'Mandera' },
  { value: 'Marsabit', label: 'Marsabit' },
  { value: 'Meru', label: 'Meru' },
  { value: 'Migori', label: 'Migori' },
  { value: 'Mombasa', label: 'Mombasa' },
  { value: 'Murang’a', label: 'Murang’a' },
  { value: 'Nairobi', label: 'Nairobi' },
  { value: 'Nakuru', label: 'Nakuru' },
  { value: 'Nandi', label: 'Nandi' },
  { value: 'Narok', label: 'Narok' },
  { value: 'Nyamira', label: 'Nyamira' },
  { value: 'Nyandarua', label: 'Nyandarua' },
  { value: 'Nyeri', label: 'Nyeri' },
  { value: 'Samburu', label: 'Samburu' },
  { value: 'Siaya', label: 'Siaya' },
  { value: 'Taita-Taveta', label: 'Taita-Taveta' },
  { value: 'Tana River', label: 'Tana River' },
  { value: 'Tharaka-Nithi', label: 'Tharaka-Nithi' },
  { value: 'Trans Nzoia', label: 'Trans Nzoia' },
  { value: 'Turkana', label: 'Turkana' },
  { value: 'Uasin Gishu', label: 'Uasin Gishu' },
  { value: 'Vihiga', label: 'Vihiga' },
  { value: 'Wajir', label: 'Wajir' },
  { value: 'West Pokot', label: 'West Pokot' },

];

const CountySelector = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option); // inakeep hiyo selection visible
    onChange && onChange(option?.value); 
  };

  return (
    <Select
    className="p-2 rounded-lg font-serif"
      options={countyOptions}
      placeholder="Select a county"
      value={selectedOption} // inabind selected option
      onChange={handleChange}
      isClearable
      
    />
  );
};

export default CountySelector;
