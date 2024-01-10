package Cursed.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Cursed.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Ячейка
 */
@Entity(name = "IISCursedЯчейка")
@Table(schema = "public", name = "Ячейка")
public class YAchejka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЯчейки")
    private String номерячейки;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Etazh")
    @Convert("Etazh")
    @Column(name = "Этаж", length = 16, unique = true, nullable = false)
    private UUID _etazhid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Etazh", insertable = false, updatable = false)
    private Etazh etazh;


    public YAchejka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНомерЯчейки() {
      return номерячейки;
    }

    public void setНомерЯчейки(String номерячейки) {
      this.номерячейки = номерячейки;
    }


}