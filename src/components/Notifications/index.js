import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>voce possui um novo agendamento para maanha</p>
            <time>ha 2 das</time>
            <button type="button">marcar como lida</button>
          </Notification>
          <Notification>
            <p>voce possui um novo agendamento para maanha</p>
            <time>ha 2 das</time>
            <button type="button">marcar como lida</button>
          </Notification>
          <Notification>
            <p>voce possui um novo agendamento para maanha</p>
            <time>ha 2 das</time>
            <button type="button">marcar como lida</button>
          </Notification>
          <Notification>
            <p>voce possui um novo agendamento para maanha</p>
            <time>ha 2 das</time>
            <button type="button">marcar como lida</button>
          </Notification>
          <Notification>
            <p>voce possui um novo agendamento para maanha</p>
            <time>ha 2 das</time>
            <button type="button">marcar como lida</button>
          </Notification>
          <Notification>
            <p>voce possui um novo agendamento para maanha</p>
            <time>ha 2 das</time>
            <button type="button">marcar como lida</button>
          </Notification>
          <Notification>
            <p>voce possui um novo agendamento para maanha</p>
            <time>ha 2 das</time>
            <button type="button">marcar como lida</button>
          </Notification>
          <Notification>
            <p>voce possui um novo agendamento para maanha</p>
            <time>ha 2 das</time>
            <button type="button">marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
