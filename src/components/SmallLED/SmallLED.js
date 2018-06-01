// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import type { TaskStatus } from '../../types';

type Props = {
  status: TaskStatus,
  isVisible: boolean,
};

const getColorForStatus = ({ status }: Props) => {
  switch (status) {
    case 'running':
      return COLORS.lightGreen[500];
    case 'error':
      return COLORS.red[500];
    default:
    case 'idle':
      return COLORS.gray[600];
  }
};

export default styled.div`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 100%;
  background-color: ${getColorForStatus};
  opacity: ${props => (props.isVisible ? 1 : 0)};
`;
