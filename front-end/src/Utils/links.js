import {IoBarChartSharp} from 'react-icons/io5'
import {MdQueryStats} from 'react-icons/md'
import {FaWpforms} from 'react-icons/fa'
import {ImProfile} from 'react-icons/im'

const links = [
{
    id: 1,
    icon: <IoBarChartSharp />,
    title: 'stats',
    path: '/'
},
{
    id: 2,
    icon: <MdQueryStats />,
    title: 'all jobs',
    path: 'all-jobs'
},
{
    id: 3,
    icon: <FaWpforms />,
    title: 'add job',
    path: 'add-jobs'
},
{
    id: 4,
    icon: <ImProfile />,
    title: 'profile',
    path: 'profile'
}
]

export default links
