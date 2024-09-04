import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Asset } from './asset.entity';
// import { BASE_URL } from '../../../config/config'
@Entity('asset_files')
export class AssetFile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    file: string;

    @ManyToOne(() => Asset, (asset) => asset.assetBusiness)
    @JoinColumn({ name: 'asset_id' })
    form: Asset;

    get logoUrl(): string {
        const baseUrl = 'dsafdsf'; // Replace this with your base URL
        return `${baseUrl}/uploads/${this.file}`; // Adjust the path as per your directory structure
    }
}