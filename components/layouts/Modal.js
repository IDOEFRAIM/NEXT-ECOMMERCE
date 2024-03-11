import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

export default function Modal({innerText,onCancel,onConfirm,actionText,actionTitle}) {
  const openModal = () => modals.openConfirmModal({
    title: actionTitle,
    children: (
      <Text size="sm">
        {actionText}
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => onCancel,
    onConfirm: () => onConfirm,
  });

  return <span onClick={openModal}>{innerText} </span>;
}