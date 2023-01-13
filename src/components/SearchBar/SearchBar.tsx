import { ChangeEvent } from 'react';
import { TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as queryActions } from '../../features/filter';

export const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector(state => state.filter.query);

  const handleQueryInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(queryActions.query(event.target.value));
  };

  return (
    <>
      <Typography
        variant="subtitle1"
        component="div"
        sx={{
          marginBottom: '10px',
          fontWeight: '600',
        }}
      >
        Filter by keywords
      </Typography>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={query}
        onChange={handleQueryInput}
        sx={{
          minWidth: '50%',
          borderRadius: '5px',
          boxShadow: 1,
        }}
      />
    </>
  );
};
