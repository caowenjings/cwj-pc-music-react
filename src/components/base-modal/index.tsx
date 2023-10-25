/** 统一弹框设置 */
import { Modal } from 'antd';

type BaseModalProps = React.ComponentProps<typeof Modal>;

/**
 * 1. getContainer 可以替换父节点，节点默认是body
 *  getContainer={() => document.getElementById(store.documentId) || document.body}
 */
const BaseModal: React.FC<BaseModalProps> = (props) => {
  return (
    <Modal centered closable maskClosable={false} width={520} {...props}>
      <div className="base-modal-wrapper">{props.children}</div>
    </Modal>
  );
};
export default BaseModal;
