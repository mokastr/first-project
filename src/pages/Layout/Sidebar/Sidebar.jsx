import ContentNav from '../../../components/ContentNav/ContentNav'
import { arrayNav } from '../../../helpers/array/arrayNav'
import { SidebarBlock } from './Sidebar.styled'

const Sidebar = () => {
	return (
		<SidebarBlock>
			<ContentNav links={arrayNav} />
		</SidebarBlock>
	)
}

export default Sidebar
