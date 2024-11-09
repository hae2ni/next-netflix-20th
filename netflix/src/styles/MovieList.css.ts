import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'flex-start',
});

export const title = style({
    display: 'flex',
    alignItems: 'center',
    fontSize: '20.92px',
    fontWeight: '700',
    color: '#FFFFFF',
});

export const contents = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '259px',
});

export const element = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '7px',
});
