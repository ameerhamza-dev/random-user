// src/components/Gender/GenderFilters.tsx
import React, {useState} from 'react'

// interface Filters {
// 	gender?: string
// 	// Add other filter properties as needed
// }

// interface GenderFiltersProps {
// 	onFilterChange: (newFilters: Filters) => void
// }

// const GenderFilters: React.FC<GenderFiltersProps> = ({onFilterChange}) => {
// 	const [genderFilter, setGenderFilter] = useState<string | undefined>(
// 		undefined
// 	)
// 	// const [nameFilter, setNameFilter] = useState<string | undefined>(undefined);
// 	// Add other filter state variables as needed

// 	const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
// 		const selectedGender = event.target.value
// 		setGenderFilter(selectedGender)
// 		onFilterChange({gender: selectedGender})
// 	}

// 	// const handleNameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
// 	//   const selectedName = event.target.value;
// 	//   setNameFilter(selectedName)

// 	//   onFilterChange({ name: selectedName });
// 	// };

// 	// Add other filter change handlers

// 	return (
// 		<>
			// <div>
			// 	<label htmlFor='genderFilter'>Gender:</label>
			// 	<select
			// 		id='genderFilter'
			// 		value={genderFilter || ''}
			// 		onChange={handleGenderChange}>
			// 		<option value=''>All</option>
			// 		<option value='male'>Male</option>
			// 		<option value='female'>Female</option>
			// 	</select>
			// 	{/* Add other filter UI elements */}
			// </div>
// 		</>
// 	)
// }

// export default GenderFilters;

const GenderFilter = (props: { onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; selectedValue: string }) => {
  return (
    <div>
      <label htmlFor='genderFilter'>Gender:</label>
      <select id='genderFilter' value={props.selectedValue} onChange={props.onChange}>
        <option value=''>All</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </select>
    </div>
  );
};

export default GenderFilter;
